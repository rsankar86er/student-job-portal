import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout (){
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout;