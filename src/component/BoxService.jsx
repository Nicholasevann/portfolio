import { React } from "../assets";
import "./BoxService.css";

const BoxService = (props) => {
  return (
    <div className={props.card}>
      <img src={props.image} alt="" className="icon-product" />

      <p className="name">{props.title}</p>
      <p className="desc-landing">{props.desc}</p>
    </div>
  );
};

export default BoxService;
