import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { requestSingleTopicList } from '../../actions';
import ModalTopicList from './ModalTopicList';
import AddTopic from './AddTopic';
import * as moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 650,
  },
}));

function Vforum(props) {
  const { singleTopicList, requestSingleTopicList, match } = props;
  const { id } = match.params;
  useEffect(() => {
    requestSingleTopicList(id);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={2}>
          <Paper elevation={0} className={classes.paper}>
            <AddTopic id={id} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Paper elevation={3} className={classes.paper}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align='center'>Created By</TableCell>
                    <TableCell align='center'>ID</TableCell>
                    <TableCell align='center'>Time</TableCell>

                    <TableCell align='center'>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {singleTopicList &&
                    singleTopicList.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell component='th' scope='row'>
                          {item.name}
                        </TableCell>
                        <TableCell align='center'>{item.createdBy}</TableCell>
                        <TableCell align='center'>{item._id}</TableCell>
                        <TableCell align='center'>
                          {moment(item.createdAt, 'YYYY-MM-DDTHH:mm:ssZ')
                            .toDate()
                            .toString()
                            .split(' ')
                            .slice(0, 5)
                            .join(' ')}
                        </TableCell>

                        <TableCell align='center'>
                          <ModalTopicList
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            groupId={id}
                          />
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

const mapStateToProps = ({ singleTopicList }) => ({
  singleTopicList,
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleTopicList: (id) => dispatch(requestSingleTopicList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vforum);
