import './App.css';
import React from 'react'
import { render } from './index'

export const varz = {
  'customers_per_day' : 0,
  'anonymous_customers' : 0,
  'ltv_per_customer' : 0,
  'email_sms_subscribers' : 0,
  'swapt_conversion_rate' : 0,
  'week' : 7,
  'month': 30,
  'year' : 365
};

var current_range = 'month';


function App() {
  return (
    <div className="App">
      <div className="app_section" id="header">
        AWESOME PRICING CALCULATOR
      </div>

      <div className="app_section calc_section" id="tpr_calc">
        <h2 className="calc_header">Total Potential Revenue</h2>

        <div className="calc_content">

          <div className="fields_section" id="tpr_fields">
            <div className="field">
              <div className="field_label">Customers per Day</div>
              <input type="text" data-in='customers_per_day' className="field_input"  placeholder={0} onChange={formUpdate}></input>
            </div>
            <div className="field">
              <div className="field_label">% of which are Anonymous</div>
              <input type="text" data-in='anonymous_customers' className="field_input" placeholder={0} onChange={formUpdate}></input>
            </div>
            <div className="field">
              <div className="field_label">LTV per Customer</div>
              <input type="text" data-in='ltv_per_customer' className="field_input" placeholder={0} onChange={formUpdate}></input>
            </div>
            <div className="field">
              <div className="field_label">Email & SMS Potential Subscribers</div>
              <input type="text" data-in='email_sms_subscribers' className="field_input" placeholder={0} onChange={formUpdate}></input>
            </div>
          </div>

          <div className="results" id="top_results">
            Potential New Net Revenue: <br />
            Per day: ${(varz['customers_per_day'] * varz['anonymous_customers'] / 100 * varz['ltv_per_customer']).toLocaleString()}
            <br />
            Per  <select className="time_range" onChange={switchRange} defaultValue="month">
                    <option value="week">week</option>
                    <option value="month">month</option>
                    <option value="year">year</option>
                  </select>:
            ${(varz['anonymous_customers'] * varz['customers_per_day'] / 100 * varz['ltv_per_customer'] * varz[current_range]).toLocaleString()}
          </div>
        </div>
      </div>


      <div className="app_section calc_section" id="sce_calc">
        <h2 className="calc_header">Swapt Conservative Estimate</h2>

        <div className="calc_content" id="sce_calc_content">

          <div className="fields_section" id="sce_fields">

            <div className="field" id="conversion_slider">
              <div className="field_label">Swapt Conversion Rate</div>
              <input type="range" min="0" max="100" defaultValue="0" id="conversion_rate_slider" data-in='swapt_conversion_rate' className="field_input slider" onChange={formUpdate}></input>
              <div id="conversion_rate_amount">{varz['swapt_conversion_rate'] + "%"}</div>
            </div>
          </div>

          <div className="results">
            Additional Net New Revenue Opportunity: <br/>
            Per day:
            ${(varz['customers_per_day'] * varz['anonymous_customers'] / 100 * varz['swapt_conversion_rate'] / 100 * varz['ltv_per_customer']).toLocaleString()}
            <br/>
            Per {current_range}:
            ${(varz['anonymous_customers'] * varz['customers_per_day'] / 100 * varz['swapt_conversion_rate'] / 100 * varz['ltv_per_customer'] * varz[current_range]).toLocaleString()}
            <br/>
            Plus {Math.ceil(varz['email_sms_subscribers'] * varz['swapt_conversion_rate'] / 100) + " Additional Email & SMS Subscribers!"}<br/>

          </div>
        </div>
      </div>


    </div>
  )
}


const formUpdate = (e) => {
  let index = e.target.dataset.in
  let x = parseInt(e.target.value);
  if(isNaN(parseInt(x))) {
    x = 0;
  }
  varz[index] = x
  render();
}

const switchRange = (e) => {
  let y = e.target.value;
  current_range = y;
  render();
}

export function BallsTestClass()  {
    return <App />
}
