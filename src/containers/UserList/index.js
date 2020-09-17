import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@material-ui/core';
import GroupList from '../../components/GroupList';
import PopularList from '../../components/PopularList';
import { connect } from 'react-redux';
import { getUserListRequest } from '../../actions';
import { useForm } from 'react-hook-form';
import { Alert } from '@material-ui/lab';
import ErrorMessage from '../../components/errorMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textfield: {
    width: '40%',
    height: '100px',
    padding: '10px',
    backgroundColor: '#d0e2bc',
    border: '3px dashed #8ebf42',
  },
  table: {
    minWidth: 650,
  },
}));

function Vforum(props) {
  const { UserList, getUserListRequest } = props;
  useEffect(() => {
    getUserListRequest();
  }, []);

  const onSubmit = (data) => {};

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={2}>
          <Paper elevation={0} className={classes.paper}>
            left
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Paper elevation={3} className={classes.paper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell align='center'>DisplayName</TableCell>
                    <TableCell align='center'>Role</TableCell>
                    <TableCell align='center'>Gender</TableCell>
                    <TableCell align='center'>ID</TableCell>
                    <TableCell align='center'>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {UserList &&
                    UserList.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell component='th' scope='row'>
                          {item.email}
                        </TableCell>
                        <TableCell align='center'>
                          {item.display_name}
                        </TableCell>
                        <TableCell align='center'>{item.role}</TableCell>
                        <TableCell align='center'>{item.gender}</TableCell>
                        <TableCell align='center'>{item._id}</TableCell>
                        <TableCell align='center'>
                          <Button>Edit</Button>
                          <Button>delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={2}></Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ UserList }) => ({
  UserList,
});

const mapDispatchToProps = (dispatch) => ({
  getUserListRequest: () => dispatch(getUserListRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vforum);
