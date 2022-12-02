import React from "react";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  facebookIcon: {
    fontSize: "2rem",
    color: "blue",
    "&:hover": {
      transform:' scale(1.1)',
      cursor: "pointer",
      GridShadow: "1",
    },
  },
}));
const address = [
  "Μαιζώνος 307 και Κυρίλλου Αρχιεπισκόπου",
  "Πάτρα, 26222",
  "magelectronicslab@gmail.com",
];

const handleClick = (event) => {
  window.open(
    "https://www.facebook.com/Mag-Electronics-Lab-1820753208215442/",
    "_blank"
  );
};

const Footer = () => {
  const iconClass = useStyles();
  return (
    <div className="footerSection">
        <Grid id="footer">
          <div>
            <h2>Που θα μας βρείτε</h2>
          </div>
          <Grid className="contact" margin="50px 0">
            <Grid>
              <Grid sx={{ m: "2px", textAlign: "center", fontSize: '22px'  }}>
                {address.map((i) => (
                  <div key={i}>
                    {i}
                  </div>
                ))}
                <div>
                  <a href="tel:+302610318995">2610318995</a>
                </div>
                <div>
                  <a href="tel:+306976751751">6976751751</a>
                </div>
        
                <FacebookIcon
                  onClick={handleClick}
                  className={iconClass.facebookIcon}
                />
              </Grid>
              <Grid sx={{textAlign: 'center'}}>
                <div>Ώρες λειτουργίας:</div>
                <div>
                  Δευτέρα-Παρασκευή: 9:30-4:30
                </div>
                <div>Σάββατο: 9:30-2:30 </div>
              </Grid>
              </Grid>
              <Grid sx={{ m: "2px", textAlign: "center"  }}>
                <iframe
                  title="MagElectronicsLabLocation"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1566.930525109291!2d21.7270608!3d38.2363315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67fe890bda017228!2sMagElectronicsLab!5e0!3m2!1sel!2sgr!4v1633351660210!5m2!1sel!2sgr"
                  width="350"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </Grid>
          </Grid>
        </Grid>
    </div>
  );
};
export default Footer;
