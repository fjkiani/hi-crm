import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  
  <section className={`${styles.flexCenter} my-4`}>
      <h2 className={styles.heading2}>
        Securely Hosted<br className="sm:block hidden" /> 
      </h2>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        
  
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
