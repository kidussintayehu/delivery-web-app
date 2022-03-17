import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section>
            
            <div className="flexGrow">
            <h1>UNAUTHORIZED</h1>
            <br />
            <h2>You do not have access to the requested page.</h2>
                <button className="unauth" onClick={goBack}>Go Back</button>
            </div>
        </section>
    )
}

export default Unauthorized;