import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
// const { default: SiteHeader } = require("../components/SiteHeader");

const SiteLayout = ({ children }) => {
    return (
     <>
      <SiteHeader />
      <main className='min-h-screen'>{children}</main>
      <SiteFooter />
     </>
    );
  };
  
  export default SiteLayout;