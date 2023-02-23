import "./BoxProduct.css";

const BoxProduct = (props) => {
  return (
    <div className={props.box}>
      <p
        style={{
          textAlign: "center",
          color: "#FF4856",
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        {props.title}
      </p>
      <img src={props.image1} alt="" className="img-product" />
      <p
        style={{
          marginTop: 40,
          color: "white",
          fontSize: 16,
          lineHeight: 2,
          textAlign: "justify",
        }}
      >
        {props.desc}
      </p>
    </div>
  );
};
export default BoxProduct;
