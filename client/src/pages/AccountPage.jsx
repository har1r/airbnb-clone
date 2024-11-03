import { useContext, useState } from "react"
import { UserContext } from "../components/UserContext"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
    const {ready,user,setUser} = useContext(UserContext);
    const [redirect,setRedirect] = useState(null);
    let {subpage} = useParams();
    function linkClasses(type=null) {
        let clasess = 'py-2 px-6';
        if(type === subpage) {
            clasess += ' bg-primary text-white rounded-full';
        }
        return clasess
    };
    async function logoutAuth() {
        await axios.post('/auth/logoutAuth');
        setRedirect('/');
        setUser(null);
    }
    if(!ready) return 'Loading...'
    if(ready && !user && !redirect) return <Navigate to={'/login'}/>
    if(subpage === undefined) {
        subpage = 'profile'
    };
    if(redirect) return <Navigate to={redirect}/>

    return(
        <div>
            <nav className="w-full flex justify-center mt-8 mb-8 gap-2">
                <Link className={linkClasses('profile')} to={'/account'}>My profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>My accommodations</Link>
            </nav>
            {
                subpage === 'profile' && (
                    <div className="text-center max-w-lg m-auto">
                        Logged in as {user.name} ({user.email})<br/>
                        <button onClick={logoutAuth} className="primary max-w-sm mt-2">Logout</button>
                    </div>
                )
            }
        </div>
    )
};