import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { AiFillPicture } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";

const Subhead = ({ current, setCurrent }) => {
  return (
    <div className="flex flex-row text-black transition-transform md:hidden ">
      <div className="my-4 w-full flex items-center ">
        <div className="flex flex-row gap-3 m-auto flex-wrap justify-center">
          <div
            className={` shadow border flex  py-2 px-6 transition-colors rounded-md ${
              current == 1
                ? "bg-orange-400 text-white font-semibold"
                : "cursor-pointer hover:bg-slate-50 active:bg-slate-100"
            }`}
            onClick={() => setCurrent(1)}
          >
            <GiPerspectiveDiceSixFacesRandom className="text-xl mr-3" />
            Random
          </div>
          <div
            className={` shadow border flex  py-2 px-6 transition-colors rounded-md ${
              current == 2
                ? "bg-orange-400 text-white font-semibold"
                : "cursor-pointer hover:bg-slate-50 active:bg-slate-100"
            }`}
            onClick={() => setCurrent(2)}
          >
            <AiFillPicture className="text-xl mr-2" />
            Grayscale
          </div>
          {/* <div
            className={` shadow border flex  py-2 px-6 transition-colors rounded-md ${
              current == 3
                ? "bg-orange-400 text-white font-semibold"
                : "cursor-pointer hover:bg-slate-50 active:bg-slate-100"
            }`}
            onClick={() => setCurrent(3)}
          >
            <MdFavorite className="text-xl mr-2" />
            Favourites
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Subhead;
