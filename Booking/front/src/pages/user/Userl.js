import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/userRedux";

import { Grid, Button, Typography, Card, CardContent } from "@mui/material";

const Userl = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <Card elevation={3}>
        <CardContent>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <Typography mt={5} variant="h6">
                <strong style={{ fontSize: 20 }}>Error 401</strong>
              </Typography>
              <Typography variant="h6">
                <strong style={{ fontSize: 20 }}>
                  You need to have Authorized access
                </strong>
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center">
            <Button size="large" color="primary" onClick={handleLogout}>
              Login
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
export default Userl;
