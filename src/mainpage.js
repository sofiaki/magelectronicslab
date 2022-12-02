import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useInView } from "react-intersection-observer";
import CloseIcon from '@mui/icons-material/Close';

const Main = () => {
  const [show, setShow] = React.useState(false);
  const [srv, setSrv] = React.useState(1);

  function showService(i){
    show === false ? setShow(true) : setShow(false);
    setSrv(i)
  }
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });
  const animation = inView ? "serviceImg animateSrv" : "serviceImg";

  console.log("My name is Giovanni Giorgio, but everybody calls me Giorgio");
  let mystring = `Επισκευή κάθε είδους ηλεκτρονικών πλακετών`;
  //const isScreenSmall=
  return (
    <>
      <Grid sx={{ height: "100px" }}></Grid>
      <Grid container direction="column" className="aboutSection">
        <div className="main">
           
            <Grid textAlign="center" className="aboutText">
              <Typography variant="h4" sx={{ fontFamily: "Arial", m: 3 }}>
                {mystring}
              </Typography>
              <p>
                Επισκευάζουμε και προγραμματίζουμε πλακέτες οχημάτων,
                επαγγελματικών μηχανημάτων, οικιακών συσκευών, Η/Υ και
                περιφεριακών. Με πολυετή εμπειρία στο χώρο των ηλεκτρονικών, σας
                εγγυόμαστε άμεση διάγνωση και σας προσφέρουμε την πιο
                αποτελεσματική λύση για όποιαδήποτε βλάβη της ηλεκτρονικής σας
                συσκευής.
              </p>
            </Grid>
             <Grid className="sideIcon">
              <img src="/assets/images/repair.webp" alt="repair"></img>
            </Grid>
        </div>
      </Grid>
      <Grid height="30px"></Grid>
      <Grid className="advantages">
        <Grid> 
          <img src="/assets/images/precision.jpg" alt="precision" width="50px" />
          <div>Ακριβής διάγνωση</div>
        </Grid>
        <Grid> 
          <img src="/assets/images/tools.png" alt="tools"  width="50px" />
         <div> Σύγχρονος εξοπλισμός</div>
        </Grid>
        <Grid> 
          <img src="/assets/images/success.jpg" alt="success"  width="50px" />
          <div>Εγγυημένα αποτελέσματα</div>
        </Grid>
      </Grid>
      <Grid sx={{ height: "60px" }}></Grid>
      <div className="serviceSection">
        <Grid className="servicesArea" id="services">
          <Typography variant="h4">Οι υπηρεσίες μας</Typography>
          <Grid className="serviceItems">
            {services.map((i,index) => (
            
              <div key={index} className="services" onClick={()=>showService(index)}>
                <div className={animation} ref={ref}>
                  <img
                    src={i.img}
                    alt={i.title}
                    title={i.title}
                    loading="lazy"
                  />
                </div>
                <div className="serviceTitle">{i.title}</div>
              </div>
              

            ))}
            {show && (<div className="serviceExpand" onClick={showService}>
                          <div className="close">
                            <CloseIcon />
                          </div>
                            <img
                              src={services[srv].img}
                              alt={services[srv].title}
                              title={services[srv].title}
                              loading="lazy"
                            />
                          <div className="serviceTitle">{services[srv].text}</div>
                        </div>)}
          </Grid>
        </Grid>
        <Box display={"none"}>
          My name is Giovanni Giorgio, but everybody calls me Giorgio
        </Box>
      </div>
      <Grid sx={{ height: "80px" }}></Grid>
    </>
  );
};

export default Main;
const services = [
  {
    img: `${process.env.PUBLIC_URL}/assets/images/diagnostic-car-computer.jpg`,
    title: "Επισκευή εγκεφάλων αυτοκινήτων",
    text: `Προγραμματισμός εγκεφάλου, κατάργηση κωδικών βλάβης, αποκατάσταση προβλημάτων από τον αισθητήρα λάμδα κτλ. `
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/appliance.jpg`,
    title: "Επισκευή πλακετών ηλεκτρικών συσκευών",
  },

  {
    img: `${process.env.PUBLIC_URL}/assets/images/car-keys.jpg`,
    title: "Immobilizer",
    text: "Κατάργηση immobilizer"
  },

  {
    img: `${process.env.PUBLIC_URL}/assets/images/motherboard.jpg`,
    title: "Επισκευή Η/Υ",
    text: "Επιδιορθώσεις-αναβαθμίσεις λογισμικού, format, επισκευές βλαβών, αλλαγές προβληματικών εξαρτημάτων σε σταθερούς και  φορητούς υπολογιστές."
  },
];
