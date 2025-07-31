import React from 'react';
import { Box, Grid, Typography, Hidden } from '@mui/material';

function AdministrativeFeesPage() {
  return (
    <Box sx={{marginTop: 20}}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={10}>
                <Hidden mdDown='true'>
                <Typography className='titleA' variant='h2'>
                        <strong>Evolv IZSoftwares Group Fees Breakdwn</strong>
                    </Typography>
                </Hidden>
                <Hidden mdUp='true'>
                    <Typography className='titleA' variant='h4'>
                        <strong>Evolv IZSoftwares Group Fees Breakdwn</strong>
                    </Typography>
                </Hidden>
            </Grid>
            <Grid item xs={12} sm={10}>
                <br /><br />
                <Typography variant='subtitle1' paragraph="true">
                    <i>Created: Dec 1, 2023</i>
                </Typography>
                <br />
                Thank you for choosing Evolv IZSoftwares Group for your Software Development, Digital Transformation, Legacy Modernization, UI/UX Design, ConnectSphere Service, and eGovernment Solutions. 
                We appreciate your trust in our services and are committed to delivering high-quality solutions tailored to your needs. 
                <br /><br />
                We have decided to enhance transparency regarding our fees, which are categorized into two parts:
                <ul>
                    <li> Administrative Fees  </li>
                    <li> Other Transaction Fees (If applicable) </li>
                </ul>
                
            </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={12} md={10}>
                <br /> <br />
                <Hidden mdDown='true'>
                    <Typography className='titleA' variant='h4'>
                        <strong>Administrative Fees</strong>
                    </Typography>
                </Hidden>
                <Hidden mdUp='true'>
                    <Typography className='titleA' variant='h6'>
                        <strong>Administrative Fees</strong>
                    </Typography>
                </Hidden>
            </Grid>
            <Grid item xs={12} sm={12} md={10}>
                <br /> <br />
                <Typography variant='body1' paragraph="true">
                    <h3><strong>Overview </strong></h3>
                    Administrative fees are assessed at a rate of 3% on the total invoice amount. 
                    These fees encompass critical aspects of financial management and administrative tasks essential to sustaining our services.

                    <br /><br />

                    <h4><strong>Financial Fees and Administrative Labor </strong></h4>

                    <ul>
                        <li> <b>Bank Transaction Fees:</b> 1% of the invoice amount, mandatory for all transactions.</li>
                        <li> <b>Payment Processing Fees:</b> 1% of the invoice amount. This covers fees related to bank transfers, mobile money transfers, card payments and currency conversion fees, mandatory for all transactions.</li>
                        <li> <b>Administrative Labor:</b> 1% of the invoice amount. This allocation encompasses time and resources dedicated to administrative duties such as billing, invoicing, bookkeeping, and requisite software subscriptions for financial management. </li>
                    </ul>
                </Typography>
            </Grid>


            <Grid item xs={12} sm={12} md={10}>
                <br /> <br />
                <Hidden mdDown='true'>
                    <Typography className='titleA' variant='h4'>
                        <strong>Other Transaction Fees</strong>
                    </Typography>
                </Hidden>
                <Hidden mdUp='true'>
                    <Typography className='titleA' variant='h6'>
                        <strong>Other Transaction Fees</strong>
                    </Typography>
                </Hidden>
            </Grid>
            <Grid item xs={12} sm={12} md={10}>
                <br /> <br />
                <Typography variant='body1' paragraph="true">
                    <h3><strong> PayPal Overview </strong></h3>
                    PayPal is widely used payment platform that facilitates online transactions globally. When using PayPal for payments, clients should be aware of their fees policies.
                    To sustain it services offering Evolv IZSoftwares Group apply a portion of the PayPal fees to certain aspects, but not universally across all.

                    <br /><br />

                    <h4><strong> PayPal Fees </strong></h4>

                    <ul>
                        <li> <b>Currency Conversion:</b> If currency conversion is applicable, a fee of 2% applies. For transactions under 250 USD, there is a flat fee of 5 USD, while transactions over 250 USD incur a 2% charge. PayPal Charges as of this date 1 Dec 2023, 4.5% Currency Conversion Fees. </li>
                        <li> <b>Service Fees:</b>  1.99% of the transaction amount. It is important to note that transactions categorized as "Payment as a Friend" are exempt from this fee.</li>
                    </ul>
                </Typography>
            </Grid>
        </Grid>
    </Box>
  );
}

export default AdministrativeFeesPage;
