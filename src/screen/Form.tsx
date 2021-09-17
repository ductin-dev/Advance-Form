import { useState } from "react";
import ItemList from "../components/ItemList";
import TextBox from "components/Form/TextBox";
import DropDown from "components/Form/DropDown";
import Description from "components/Form/Description";
import PhotoUploader from "components/Form/PhotoUploader";
import { importDataToLocal } from "../utils/localData";
import { stringValid, numValid } from "../utils/validation";

const typeOptions = [
  { value: "Type A", displayName: "Type A" },
  { value: "Type B", displayName: "Type B" },
  { value: "Type C", displayName: "Type C" },
];

const Sidebar = () => (
  <div className="md:col-span-1">
    <div className="px-4 sm:px-0">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        This is the demo form
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        You can submit using this form,<br></br> then data will save in
        localStorage and display below !
      </p>
    </div>
    <ItemList />
  </div>
);

const MainForm = () => {
  //State
  const [state, setState] = useState({
    Title: "",
    CWork: "",
    Description: "",
    Type: typeOptions[0].value,
    Postal: "",
    Comment: "",
    Img: [], //Files, using axois or fecth to see it works
    ImgBase64: "", //Single, for display thumbia
  });

  const [err_Title, setErr_Title] = useState(false);
  const [err_CWork, setErr_CWork] = useState(false);
  const [err_Postal, setErr_Postal] = useState(false);
  const [err_Img, setErr_Img] = useState(false);

  //Onchange
  const onChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const imageOnChange = (data: any) => {
    setState({
      ...state,
      Img: data.Images,
      ImgBase64: data.ImgBase64,
    });
  };

  //Submit
  const submitHandler = (e: any) => {
    e.preventDefault();

    if (stringValid(state.Title)) setErr_Title(false);
    else return setErr_Title(true);

    if (stringValid(state.CWork)) setErr_CWork(false);
    else return setErr_CWork(true);

    if (numValid(state.Postal)) setErr_Postal(false);
    else return setErr_Postal(true);

    if (state.Img.length > 0) setErr_Img(false);
    else return setErr_Img(true);

    importDataToLocal(state);

    window.location.reload();
  };

  //Render
  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/*Title*/}
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <TextBox
                  title={"Title"}
                  description={"* Title for product"}
                  value={state.Title}
                  name="Title"
                  onChange={(e: any) => onChange(e)}
                  error={err_Title}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <TextBox
                  title={"CWork"}
                  description={"* Required"}
                  value={state.CWork}
                  name="CWork"
                  onChange={(e: any) => onChange(e)}
                  error={err_CWork}
                />
              </div>
            </div>

            {/*Description*/}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Description
                  title={"Description"}
                  description={"Description of your product"}
                  value={state.Description}
                  name="Description"
                  onChange={(e: any) => onChange(e)}
                />
              </div>
            </div>

            {/*Option sets area*/}
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <TextBox
                  title={"Postal"}
                  description={"* Required, postal number"}
                  value={state.Postal}
                  name="Postal"
                  onChange={(e: any) => onChange(e)}
                  error={err_Postal}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <DropDown
                  title={"Type"}
                  description={"* Option Set, choosen one!"}
                  value={state.Type}
                  name="Type"
                  onChange={(e: any) => onChange(e)}
                  valueSet={typeOptions}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <TextBox
                  title={"Comment"}
                  description={"Your Comment"}
                  value={state.Comment}
                  name="Comment"
                  onChange={(e: any) => onChange(e)}
                />
              </div>
            </div>

            {/*Photo*/}
            <PhotoUploader
              multiple
              onChange={(data: any) => imageOnChange(data)}
              error={err_Img}
            />
          </div>

          {/*Submit*/}
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              onClick={(e) => submitHandler(e)}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Form = () => {
  return (
    <div>
      <br></br>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        {Sidebar()}
        {MainForm()}
      </div>
    </div>
  );
};

export default Form;
