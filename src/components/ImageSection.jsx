import MyComponent from "./MyComponent";

const ImageSection = props => (
  <div style={props.style} className={props.className}>
    <img src={props.src} alt={props.alt} style={{ maxWidth: "100%" }} />

    {/* questo componente richiama a sua volta il componente MyComponent */}
    <MyComponent title={props.title} btnText={props.btnText} />
  </div>
);

export default ImageSection;
