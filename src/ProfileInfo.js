import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import classNames from 'classnames';


const useStyles = makeStyles((theme) => ({
    contact: {
        backgroundColor: 'white',
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        marginTop: '50px',
    },
    mail: {
        fontFamily: "Open Sans",
        fontSize: "18px",
        marginLeft: "45px",
        ['@media (max-width:600px)']: { 
            fontSize: "14px",
        }
    },
    tel: {
        fontFamily: "Open Sans",
        fontSize: "18px",
        marginLeft: "45px",
        ['@media (max-width:600px)']: { 
            fontSize: "14px",
        }
    },
    mailWrap: {
        display: 'flex',
        margin: '33px 77px',
        ['@media (max-width:600px)']: { 
            margin: '22px 12px',
        }
    },
    telWrap: {
        display: 'flex',
        margin: '33px 77px',
        ['@media (max-width:600px)']: { 
            margin: '22px 12px',
        }
    },
    inputsWrap: {
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        marginTop: '50px',
        ['@media (max-width:1700px)']: { 
            justifyContent: 'space-around',
        },
        ['@media (max-width:1050px)']: { 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '0px',
        },

    },
    formWrap: {
        width: '100%'
    },
    iconInput: {
        marginRight: '45px',
        ['@media (max-width:1050px)']: { 
            display: 'none',
        },
    },
    inputWrap: {
        display: 'flex',
        alignItems: 'center',
    },
    buttonWrap: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: "45px",
        marginBottom: "45px",
        ['@media (max-width:1050px)']: { 
            marginTop: '25px',
            marginBottom: "25px",
        },
    },
    saveButton: {
        width: '220px',
        height: '50px',
        background: "#01BDA7",
        borderRadius: "36px",
        fontFamily: "Open Sans",
        fontSize: "14px",
        color: "#FFFFFF",
        '&:hover': {
            cursor: "pointer",
            background: '#01A08D'
        }
    },
    input: {
        width: "250px",
        ['@media (max-width:1050px)']: { 
            marginTop: '25px'
        },
    },
    profileIcon: {
        ['@media (max-width:1050px)']: { 
            width: '20px',
            height: '20px'
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: '1300',
        visibility: 'visible',
        right: '0px',
        top: '0px',
        left: '0px',
        bottom: '0px',
        backgroundColor: 'rgb(0,0,0, 0.5)',
    },
    modalNoActive: {
        zIndex: '0',
        visibility: 'hidden',
    },
    modalOk: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: '1300',
        visibility: 'visible',
        right: '0px',
        top: '0px',
        left: '0px',
        bottom: '0px',
        backgroundColor: 'rgb(0,0,0, 0.5)',
    },
    modalOkNoActive: {
        zIndex: '0',
        visibility: 'hidden',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '150%',
        border: "none",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "10px",
        width: '600px',
        height: '320px',
        padding: '30px',
        transition: '0.3s top',
        ['@media (max-width:650px)']: { 
            width: '400px',
        },
        ['@media (max-width:450px)']: { 
            width: '100%',
            height: '100%',
            borderRadius: "20px",
        },
    },
    modalOkWrap: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '150%',
        border: "none",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "10px",
        width: '600px',
        height: '320px',
        padding: '86px',
        transition: '0.3s top',
        ['@media (max-width:650px)']: { 
            width: '400px',
        },
        ['@media (max-width:450px)']: { 
            width: '100%',
            height: '100%',
            borderRadius: "20px",
            padding: '20px'
        },
    },
    modalOkActiveWrap: {
        top: '30%',
        transition: '0.3s',
        ['@media (max-width:450px)']: { 
            top: '90%'
        }
    },
    paperActive: {
        top: '30%',
        transition: '0.3s',
    },
    btnSave: {
        width: "200px",
        height: '50px',
        background: "#01BDA7",
        borderRadius: "41px",
        fontFamily: "Open Sans",
        fontSize: "14px",
        color: "#FFFFFF",
        textTransform: 'capitalize',
        marginTop: '30px',
        '&:hover': {
            cursor: "pointer",
            background: '#01A08D'
        },
        ['@media (max-width:450px)']: { 
            marginTop: '35px',
        }
    },
    btnOk: {
        width: "200px",
        height: '50px',
        background: "#01BDA7",
        borderRadius: "41px",
        fontFamily: "Open Sans",
        fontSize: "14px",
        color: "#FFFFFF",
        textTransform: 'capitalize',
        marginTop: '30px',
        '&:hover': {
            cursor: "pointer",
            background: '#01A08D'
        },
        ['@media (max-width:450px)']: { 
            display: 'none',
        }
    },
    btnNoSave: {
        width: "200px",
        height: '50px',
        background: "#ffffff",
        borderRadius: "41px",
        fontFamily: "Open Sans",
        fontSize: "14px",
        color: "#01BDA7",
        border: "1px solid #00BFA5",
        textTransform: 'capitalize',
        marginTop: '30px',
        '&:hover': {
            cursor: "pointer",
            background: '#01BDA7',
            color: "#ffffff",
        },
        ['@media (max-width:450px)']: { 
            marginTop: '35px',
        }
    },
    modalClose: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '25px'
    },
    modalTitle: {
        fontFamily: "Open Sans",
        fontSize: "24px",
        color: "rgba(49, 49, 49, 0.7)",
        ['@media (max-width:450px)']: { 
            fontSize: "18px",
        },
    },
    modalBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    modalOkBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    closePopup: {
        '&:hover': {
            cursor: "pointer",
        }
    },
    
}));

const FormBlock = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [dataSave, setDataSave] = React.useState(false);
    const [data, setData] = React.useState({})

    const requestForm = (e) => {
        e.preventDefault()
        let data = {
            name: e.target.elements.name.value,
            mail: e.target.elements.mail.value,
            tel: e.target.elements.tel.value
        }
        setData(data)
        setOpen(true)
    }

    const handleSaveData = () => {
        setOpen(false)
        axios.post('http://jsonplaceholder.typicode.com/posts', {
                "Content-Type": "application/json",
                "x-token-access": "random",
                "body": data
            }, setOpen(true))
                .then(res => {
                    localStorage.setItem('name', JSON.stringify(res.data.body))
                })
                .catch(err => {
                    console.log(err)
                })
        setDataSave(true)
    }

    const handleClose = () => {
        setOpen(false);
        setDataSave(false)
    };


    return (
        <form onSubmit={requestForm} className={classes.formWrap}>
            <div className={classes.inputsWrap}>
                <Box className={classes.inputWrap}>
                    <svg className={classes.iconInput} width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 3.49994H18.23C17.6 1.75994 15.95 0.499939 14 0.499939C12.05 0.499939 10.4 1.75994 9.77 3.49994H3.5C1.85 3.49994 0.5 4.84994 0.5 6.49994V27.4999C0.5 29.1499 1.85 30.4999 3.5 30.4999H24.5C26.15 30.4999 27.5 29.1499 27.5 27.4999V6.49994C27.5 4.84994 26.15 3.49994 24.5 3.49994ZM14 3.49994C14.825 3.49994 15.5 4.17494 15.5 4.99994C15.5 5.82494 14.825 6.49994 14 6.49994C13.175 6.49994 12.5 5.82494 12.5 4.99994C12.5 4.17494 13.175 3.49994 14 3.49994ZM14 9.49994C16.49 9.49994 18.5 11.5099 18.5 13.9999C18.5 16.4899 16.49 18.4999 14 18.4999C11.51 18.4999 9.5 16.4899 9.5 13.9999C9.5 11.5099 11.51 9.49994 14 9.49994ZM23 27.4999H5V25.3999C5 22.3999 11 20.7499 14 20.7499C17 20.7499 23 22.3999 23 25.3999V27.4999Z" fill="#00BFA5"/>
                    </svg>
                    <TextField
                        className={classes.input}
                        required
                        name="name"
                        id="outlined-required"
                        label="Фамилия и имя"
                        variant="outlined"
                        type="text"
                    />
                </Box>
                <Box className={classes.inputWrap}>
                    <svg className={classes.iconInput} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6.10352e-05C6.72 6.10352e-05 0 6.72006 0 15.0001C0 23.2801 6.72 30.0001 15 30.0001H22.5V27.0001H15C8.49 27.0001 3 21.5101 3 15.0001C3 8.49006 8.49 3.00006 15 3.00006C21.51 3.00006 27 8.49006 27 15.0001V17.1451C27 18.3301 25.935 19.5001 24.75 19.5001C23.565 19.5001 22.5 18.3301 22.5 17.1451V15.0001C22.5 10.8601 19.14 7.50006 15 7.50006C10.86 7.50006 7.5 10.8601 7.5 15.0001C7.5 19.1401 10.86 22.5001 15 22.5001C17.07 22.5001 18.96 21.6601 20.31 20.2951C21.285 21.6301 22.965 22.5001 24.75 22.5001C27.705 22.5001 30 20.1001 30 17.1451V15.0001C30 6.72006 23.28 6.10352e-05 15 6.10352e-05ZM15 19.5001C12.51 19.5001 10.5 17.4901 10.5 15.0001C10.5 12.5101 12.51 10.5001 15 10.5001C17.49 10.5001 19.5 12.5101 19.5 15.0001C19.5 17.4901 17.49 19.5001 15 19.5001Z" fill="#00BFA5"/>
                    </svg>
                    <TextField
                        className={classes.input}
                        required
                        name="mail"
                        id="outlined-disabled"
                        label="E-mail"
                        variant="outlined"
                        type="email"
                    />
                </Box>
                <Box className={classes.inputWrap}>
                    <svg className={classes.iconInput} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.015 19.07C24.17 19.07 22.385 18.77 20.72 18.23C20.195 18.05 19.61 18.185 19.205 18.59L16.85 21.545C12.605 19.52 8.63 15.695 6.515 11.3L9.44 8.81C9.845 8.39 9.965 7.805 9.8 7.28C9.245 5.615 8.96 3.83 8.96 1.985C8.96 1.175 8.285 0.5 7.475 0.5H2.285C1.475 0.5 0.5 0.86 0.5 1.985C0.5 15.92 12.095 27.5 26.015 27.5C27.08 27.5 27.5 26.555 27.5 25.73V20.555C27.5 19.745 26.825 19.07 26.015 19.07Z" fill="#00BFA5"/>
                    </svg>
                    <TextField
                        className={classes.input}
                        required
                        name="tel"
                        id="outlined-required"
                        label="Номер телефона"
                        variant="outlined"
                        type="number"
                    />
                </Box>
            </div>
            <div className={classes.buttonWrap}>
                <Button type="submit" className={classes.saveButton}>Сохранить изменения</Button>
            </div>
            <div
                className={open ? classes.modal : classNames(classes.modal, classes.modalNoActive)}
                open={open}
            >
                <div className={open ? classNames(classes.paper, classes.paperActive) : classes.paper}>
                    <div className={classes.modalClose}>
                        <svg className={classes.closePopup} onClick={handleClose} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#828282"/>
                        </svg>
                    </div>
                    <div className={classes.modalBody}>
                        <h2 className={classes.modalTitle}>Сохранить изменения ?</h2>
                        <Button onClick={handleSaveData} className={classes.btnSave}>Сохранить</Button>
                        <Button onClick={handleClose} className={classes.btnNoSave}>Не cохранять</Button>
                    </div>
                </div>
            </div>
            <div
                open={dataSave}
                className={dataSave ? classes.modalOk : classNames(classes.modalOk, classes.modalOkNoActive)}
                onClick={handleClose}
            >
                <div className={dataSave ? classNames(classes.modalOkWrap, classes.modalOkActiveWrap) : classes.modalOkWrap}>
                    <div className={classes.modalOkBody}>
                        <h2 className={classes.modalTitle}>Данные успешно сохранены</h2>
                        <Button className={classes.btnOk} onClick={handleClose}>Хорошо</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}
  
export default function ProfileTop({popupInputs}) {
    const classes = useStyles();
  
    return (
      <div>
            <Grid className={classes.contact}  container spacing={3}>
                {popupInputs ?
                    <FormBlock/>
                    : <>
                        <Grid className={classes.mailWrap} item xs={12}>
                            <svg className={classes.profileIcon} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6.10352e-05C6.72 6.10352e-05 0 6.72006 0 15.0001C0 23.2801 6.72 30.0001 15 30.0001H22.5V27.0001H15C8.49 27.0001 3 21.5101 3 15.0001C3 8.49006 8.49 3.00006 15 3.00006C21.51 3.00006 27 8.49006 27 15.0001V17.1451C27 18.3301 25.935 19.5001 24.75 19.5001C23.565 19.5001 22.5 18.3301 22.5 17.1451V15.0001C22.5 10.8601 19.14 7.50006 15 7.50006C10.86 7.50006 7.5 10.8601 7.5 15.0001C7.5 19.1401 10.86 22.5001 15 22.5001C17.07 22.5001 18.96 21.6601 20.31 20.2951C21.285 21.6301 22.965 22.5001 24.75 22.5001C27.705 22.5001 30 20.1001 30 17.1451V15.0001C30 6.72006 23.28 6.10352e-05 15 6.10352e-05ZM15 19.5001C12.51 19.5001 10.5 17.4901 10.5 15.0001C10.5 12.5101 12.51 10.5001 15 10.5001C17.49 10.5001 19.5 12.5101 19.5 15.0001C19.5 17.4901 17.49 19.5001 15 19.5001Z" fill="#00BFA5"/>
                            </svg>
                            <p className={classes.mail}>Ivanova@mail.ru</p>
                        </Grid>
                        <Grid className={classes.telWrap} item xs={12}>
                            <svg className={classes.profileIcon} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.015 19.07C24.17 19.07 22.385 18.77 20.72 18.23C20.195 18.05 19.61 18.185 19.205 18.59L16.85 21.545C12.605 19.52 8.63 15.695 6.515 11.3L9.44 8.81C9.845 8.39 9.965 7.805 9.8 7.28C9.245 5.615 8.96 3.83 8.96 1.985C8.96 1.175 8.285 0.5 7.475 0.5H2.285C1.475 0.5 0.5 0.86 0.5 1.985C0.5 15.92 12.095 27.5 26.015 27.5C27.08 27.5 27.5 26.555 27.5 25.73V20.555C27.5 19.745 26.825 19.07 26.015 19.07Z" fill="#00BFA5"/>
                            </svg>
                            <p className={classes.tel} placeholder="Укажите номер телефона">Укажите номер телефона</p>
                        </Grid>
                    </>
                }
            </Grid>
      </div>
    );
}