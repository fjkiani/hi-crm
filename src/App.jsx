import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
<<<<<<< HEAD
 
        <CTA />
        {/* <CardDeal />
        <Billing /> */}

        <Testimonials />
        <Footer/>
        {/* <Billing />
=======
        <Footer/>
        {/* <Billing />
        <CardDeal />
>>>>>>> origin/main
        <Testimonials />
        <CTA />
        <Clients />
        <Footer /> */}
      </div>
    </div>
  </div>
);

export default App;
