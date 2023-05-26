
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />

        </div>
    );
};

export default MainLayout;