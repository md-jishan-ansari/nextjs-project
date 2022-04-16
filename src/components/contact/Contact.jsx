import { useState, useContext, useEffect } from 'react';
import AppContext from '../../AppContext';
import { Button, Grid } from '@mui/material';

import { ArrowForward } from '@mui/icons-material';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants.jsx';

import Input from './Input.jsx';

import classes from './Contact.module.css';

const initialData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const { setShowFooter } = useContext(AppContext);

  const { ref: forFooterRef, inView: forFooterInView } = useInView({ threshold: 0.7 });

  const [userData, setUserData] = useState(initialData);

  useEffect(() => {
    setShowFooter(!forFooterInView);
  }, [forFooterInView]);

  const ChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData(initialData);
  };

  return (
    <div container className={`topContainer ${classes.contactContainer}`}>
      <h4 className="firstHeading" style={{ marginBottom: 100 }}>
        Contact.
      </h4>

      <form onSubmit={submitHandler} className={classes.formContainer}>
        <div>
          <Input
            name="name"
            label="First & Last Name"
            type="text"
            value={userData.name}
            ChangeHandler={ChangeHandler}
          />
        </div>
        <div>
          <Input
            name="email"
            label="E-mail"
            type="email"
            value={userData.email}
            ChangeHandler={ChangeHandler}
          />
        </div>
        <div>
          <Input
            name="phone"
            label="Phone number"
            type="text"
            value={userData.phone}
            ChangeHandler={ChangeHandler}
          />
        </div>
        <div>
          <Input
            name="message"
            label="Message"
            value={userData.message}
            ChangeHandler={ChangeHandler}
          />
        </div>

        <Button type="submit" variant="outlined" className={classes.submitButton}>
          <motion.div
            variants={fadeIn()}
            whileHover="whileHover"
            whileTap="whileTap"
            className="discoveryLink"
            style={{ padding: 0, margin: 0 }}
          >
            <ArrowForward /> <span>Submit</span>
          </motion.div>
        </Button>
      </form>
      <div
        style={{
          position: 'absolute',
          bottom: 450,
        }}
        ref={forFooterRef}
      ></div>
    </div>
  );
};

export default Contact;
