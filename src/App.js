import Navbar from "./Component/Navbar";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Result from "./Component/Result";
import SliderSelect from "./Component/Selector/SliderSelector/slide";
import TenureSelect from "./Component/Selector/TenureSelector/tenure";
function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6} mt={5}>
            <SliderSelect data={data} setData={setData} />

            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
