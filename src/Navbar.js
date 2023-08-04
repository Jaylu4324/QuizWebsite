import react from "react"
function Navbar(props) {
    return (
        <>



            <div className={`container-fluid bg-${props.bg} text-${props.font}`}>
                <div className="row justify-content-center align-items-center pt-2">
                    <div className="col-md-6">
                        <h3 className={`navbar-brand  h1 text-md-end text-sm-center text-center fs-2   mb-3 `}>Quiz Website</h3>

                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.modeChanger()}}/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode} Mode</label>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
export default Navbar;