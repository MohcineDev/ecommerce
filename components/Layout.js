import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <div className="layout">
        <NavBar/>
        {
            props.children
        }
    </div>
  )
}
