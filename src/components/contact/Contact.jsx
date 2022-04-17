import { useState } from 'react';
import { Button, Grid } from '@mui/material';

import { ArrowForward } from '@mui/icons-material';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants.jsx';

import Input from './Input.jsx';

import classes from './Contact.module.css';

import BottomView from '../BottomView.jsx';

const initialData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const { ref: contactRef, inView: contactInView } = useInView();

  const [userData, setUserData] = useState(initialData);

  const ChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData(initialData);
  };

  return (
    <div ref={contactRef} container className={`topContainer ${classes.contactContainer}`}>
      <motion.h4
        variants={fadeIn(contactInView, 0.2, 33)}
        initial="initial"
        animate="animate"
        className="firstHeading"
        style={{ marginBottom: 100 }}
      >
        Contact.
      </motion.h4>

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
      <BottomView section="footer" />
    </div>
  );
};

export default Contact;
