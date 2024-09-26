import { Link } from "react-router-dom";

export default function Page404() {

    return (
        <>
            <p className="text-4xl font-semibold 
          text-center pt-10 ">Page 404 - Not Found 🤖
            </p>
            <div className="text-center mt-10">
                <Link to={"/"}>
                    Retour à la page d'acceuil - Back to Homepage
                </Link>
            </div>
        </>
    )
}
