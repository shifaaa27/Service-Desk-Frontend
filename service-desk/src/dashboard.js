import React, { useState } from 'react';
import DashIcon from './icons/home.png';
import TicketIcon from './icons/edit.png';
import ReportIcon from './icons/report.png';
import BookIcon from './icons/book.png';
import SurveyIcon from './icons/survey.png';
import AdminIcon from './icons/admin.png';
import BackIcon from './icons/angle-left.png';
import DropDown from './icons/dropdown.png';
import SearchIcon from './icons/search.png';
import SettingsIcon from './icons/settings.png';
import Chart from './components/Chart.js';
import Line from './components/Line.js';
import Bar from './components/Bar.js';


function Dashboard() {
  const [isTicketDropdownOpen, setTicketDropdownOpen] = useState(false);
  const [isCreateTicketDropdownOpen, setCreateTicketDropdownOpen] = useState(false);
  const [isReportDropdownOpen, setReportDropdownOpen] = useState(false);
  const [isAdminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [isOrganizationDropdownOpen, setOrganizationDropdownOpen] = useState(false);
  const [isOperationalDropdownOpen, setOperationalDropdownOpen] = useState(false);

  const [showResults, setShowResults] = React.useState(false)
  const clicker = () => setShowResults(!showResults)

  const handleTicketDropdownToggle = () => {
    setTicketDropdownOpen(!isTicketDropdownOpen);
  };

  const handleCreateTicketDropdownToggle = () => {
    setCreateTicketDropdownOpen(!isCreateTicketDropdownOpen);
  };

  const handleReportDropdownToggle = () => {
    setReportDropdownOpen(!isReportDropdownOpen);
  };

  const handleAdminDropdownToggle = () => {
    setAdminDropdownOpen(!isAdminDropdownOpen);
  };

  const handleOrganizationDropdownToggle = () => {
    setOrganizationDropdownOpen(!isOrganizationDropdownOpen);
  };

  const handleOperationalDropdownToggle = () => {
    setOperationalDropdownOpen(!isOperationalDropdownOpen);
  };

  const [toggle, setToggle] = useState(true);

  


  
  return (
    <div id="dashboard" className="flex flex-row font-lato">
      <div className="bg-white text-black-200 w-auto h-screen rounded-md p-3 border-r-2 overflow-y-scroll" style={scrollbarStyle}>
        <div className="p-4 border-b border-gray-300">
          <h1 className="text-xl font-bold">R Systems</h1>
        </div>
        <div className="p-4 border-b border-gray-300">
          <p>John Doe</p>
        </div>
        
       
        <nav className="my-2 ">
          <ul className="space-y-2">
            <li className="px-4 py-2 bg-gradient-to-r from-blue-300 to-teal-100 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
              <img src={DashIcon} alt="Dashboard Icon" className="w-5 h-5" />
              { showResults ? <a href="#" className="block pl-3">Dashboard</a> : null }
              
            </li>
            <li className={`px-4 py-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row ${isTicketDropdownOpen ? 'bg-gradient-to-r from-blue-300 to-teal-100' : ''}`}>
              <img src={TicketIcon} alt="Ticket Icon" className="w-5 h-5" />
              { showResults ?
              <div className='flex flex-row w-1/6' ><a href="#" className="flex pl-3" onClick={handleTicketDropdownToggle}>Tickets</a>
              <img src={DropDown} alt="Drop Icon" className="w-5 h-5 ml-auto" /> 
              </div> : null }
            </li>
              
            {isTicketDropdownOpen && (
              <div className="border-l-2 border-blue-300">
                <li className={`px-1 py-1 mx-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row ${isCreateTicketDropdownOpen ? 'mx-2 bg-gradient-to-r from-blue-300 to-teal-100' : ''}`}>
                  <a href="#" className="block pl-6 text-sm " onClick={handleCreateTicketDropdownToggle}>Create Ticket</a>
                  <img src={DropDown} alt="Drop Icon" className="w-5 h-5 ml-auto" />
                </li>
                {isCreateTicketDropdownOpen && (
                  <div className="pl-2 my-2 border-l-2 border-blue-300 mx-2">
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Incident</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Service Request</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Change Request</a>
                    </li>
                  </div>
                )}
                <li className="px-1 py-1 mx-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">My Tickets</a>
                </li>
                <li className="px-1 py-1 mx-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Group Tickets</a>
                </li>
                <li className="px-1 py-1 mx-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Pending Approvals</a>
                </li>
                <li className="px-1 py-1 mx-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Locked Tickets</a>
                </li>
              </div>
            )}
            <li className="px-4 py-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
              <img src={ReportIcon} alt="Report Icon" className="w-5 h-5" />
              { showResults ?
              <div className='w-auto flex flex-row'>
              <a href="#" className="block pl-3" onClick={handleReportDropdownToggle}>Reports</a>
              <img src={DropDown} alt="Drop Icon" className="w-5 h-5 ml-auto" />
              </div> : null}
            </li>
            {isReportDropdownOpen && (
              <div className="border-l-2 border-blue-300">
                <li className="px-1 py-1 ml-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Groupwise SLA Status</a>
                </li>
                <li className="px-1 py-1 ml-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Monthly Groupwise Reported Vs Closed</a>
                </li>
                <li className="px-1 py-1 ml-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Incident Vs Service Request Vs Change Request Raised</a>
                </li>
                <li className="px-1 py-1 ml-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">FY Trend Line - All Types Of Requests</a>
                </li>
                <li className="px-1 py-1 ml-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Quarterly Classification Of Incidents</a>
                </li>
                <li className="px-1 py-1 ml-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Escalation Groupwise Report</a>
                </li>
                <li className="px-1 py-1 ml-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                  <a href="#" className="block pl-6 text-sm">Call Log Report</a>
                </li>
              </div>
            )}
            <li className="px-4 py-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
              <img src={BookIcon} alt="Book Icon" className="w-5 h-5" />
              { showResults ? <a href="#" className="block pl-3">Knowledge Base</a> :null}
            </li>
            <li className="px-4 py-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
              <img src={SurveyIcon} alt="Survey Icon" className="w-5 h-5" />
              { showResults ?<a href="#" className="block pl-3">Surveys</a> :null}
            </li>
            <li className={`px-4 py-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row ${isAdminDropdownOpen ? 'bg-gradient-to-r from-blue-300 to-teal-100' : ''}`}>
              <img src={AdminIcon} alt="Admin Icon" className="w-5 h-5" />
              { showResults ?
              <div className='flex flex-row'>
              <a href="#" className="flex pl-3" onClick={handleAdminDropdownToggle}>Administration</a>
              <img src={DropDown} alt="Drop Icon" className="w-5 h-5 ml-auto" />
              </div> :null}
            </li>
            {isAdminDropdownOpen && (
              <div className="border-l-2 border-blue-300">
                <li className={`px-1 py-1 mx-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row ${isOrganizationDropdownOpen ? 'mx-2 bg-gradient-to-r from-blue-300 to-teal-100' : ''}`}>
                  <a href="#" className="block pl-6 text-sm " onClick={handleOrganizationDropdownToggle}>Organization Module</a>
                  <img src={DropDown} alt="Drop Icon" className="w-5 h-5 ml-auto" />
                </li>
                {isOrganizationDropdownOpen && (
                  <div className="pl-2 my-2 border-l-2 border-blue-300 mx-2">
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Company Profiles</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Branches</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Departments</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Designations</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">User Profiles</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Holidays</a>
                    </li>
                  </div>
                )}
                <li className={`px-1 py-1 mx-2 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row ${isOperationalDropdownOpen ? 'mx-2 bg-gradient-to-r from-blue-300 to-teal-100' : ''}`}>
                  <a href="#" className="block pl-6 text-sm " onClick={handleOperationalDropdownToggle}>Operational Module</a>
                  <img src={DropDown} alt="Drop Icon" className="w-5 h-5 ml-auto" />
                </li>
                {isOperationalDropdownOpen && (
                  <div className="pl-2 my-2 border-l-2 border-blue-300 mx-2">
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Keywords</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Service Groups</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Application</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Application Classification</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">SLA Configuration</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Workflow Profiles</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Workflow for Forms</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Escalation Setup</a>
                    </li>
                    <li className="px-1 py-1 hover:bg-gradient-to-r from-blue-300 to-teal-100 rounded flex flex-row">
                      <a href="#" className="block pl-6 text-sm">Application Roles</a>
                    </li>
                  </div>
                )}
              </div>
            )}
          </ul>
        </nav>
        
      </div>
      <div className="flex flex-col w-5/6 h-auto py-4 px-4 bg-sky-50 space-y-2">
      <div className="p-2 mb-2 border-b border-gray-300 flex flex-row justify-between">
        <button className="bg-gray-300 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-xl">
          <img src={BackIcon} alt="Collapse Icon" id="closebtn" className="w-3 h-3" onClick={clicker}/>
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className='flex items-center'>
          <div className='bg-gray-300 flex items-center rounded-md px-2 py-1'>
          <p className='mr-2 text-gray-500'>Search Tickets</p>
          <img src={SearchIcon} alt="Search Icon" className="w-4 h-4" />
          </div>
          <img src={SettingsIcon} alt="Setting Icon" className="w-5 h-5 ml-6" />
        </div>
      </div>
      <div class="wrapper flex flex-col">
      <div class="row-1 flex flex-row">
        <div className='m-2 bg-white w-1/3 rounded-lg px-2 drop-shadow-sm'> 
          <p className='py-2 px-2 border-b border-gray-300 text-base'>Requests by Marketing</p>
          <table class="table-auto">
            <thead>
              <tr>
              <th class="px-4 py-2 border-b"></th>
              <th class="px-4 py-2 text-xs border-b font-normal">OPEN</th>
              <th class="px-4 py-2 text-xs border-b font-normal">ONHOLD</th>
              <th class="px-4 py-2 text-xs border-b font-normal">OVERDUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td class="px-4 py-2 text-xs">Lana Anderson</td>
              <td class="px-4 py-2 text-xs text-center">2</td>
              <td class="px-4 py-2 text-xs text-center">3</td>
              <td class="px-4 py-2 text-xs text-center text-red-600">3</td>
              </tr>
              <tr>
              <td class="px-4 py-2 text-xs">Lana Anderson</td>
              <td class="px-4 py-2 text-xs text-center">2</td>
              <td class="px-4 py-2 text-xs text-center">3</td>
              <td class="px-4 py-2 text-xs text-center text-red-600">3</td>
              </tr>
              <tr>
              <td class="px-4 py-2 text-xs">Lana Anderson</td>
              <td class="px-4 py-2 text-xs text-center">2</td>
              <td class="px-4 py-2 text-xs text-center">3</td>
              <td class="px-4 py-2 text-xs text-center text-red-600">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex flex-col pending m-2 w-1/4">
          <div class="sev-row-1 w-full  flex flex-row p-2 h-1/2">
            <div class="severity-critical w-1/2 rounded-lg drop-shadow-sm mx-1.5 bg-white px-3 py-1 text-red-600">Critical</div>
            <div class="severity-med w-1/2 rounded-lg drop-shadow-sm mx-1.5 bg-white px-3 py-1 text-yellow-300">Medium</div>
          </div>
          <div class="sev-row-2 w-full flex flex-row p-2 h-1/2">
            <div class="severity-high w-1/2 rounded-lg drop-shadow-sm mx-1.5 bg-white px-3 py-1 text-orange-500">High</div>
            <div class="severity-low w-1/2 rounded-lg drop-shadow-sm mx-1.5 bg-white px-3 py-1 text-lime-500">Low</div>
          </div>
          
        </div>
        <div class="chart1 w-1/3 h-1 ">
          <Chart/>
        </div>
      </div>
     
      <div class="row-2 flex flex-row">
        <div class="chart2 w-1/2 h-1/2">
          <Line/>
        </div>
        <div class="chart3 w-2/5 h-auto bg-white rounded-lg px-2 drop-shadow-sm mx-5 my-3">
        <p className='py-2 px-2 border-b border-gray-300 text-base'>SLA Violated Requests</p>
          <div className='rounded-xl bg-gray-300 h-5 m-5'>
            <div class="rounded-xl bg-red-600 h-5 mr-14"></div>
          </div>
          <div className="flex rounded-xl h-5 m-5">
            <div className="w-1/3 rounded-l-xl bg-red-600"></div>
            <div className="w-1/3 bg-yellow-400"></div>
            <div className="w-1/3 rounded-r-xl bg-green-600"></div>
          </div>
        <div className='flex flex-row justify-center'>
          <p className='px-2 text-xs'>15: Violated</p>
          <p className='px-2 text-xs'>5: Critical</p>
          <p className='px-2 text-xs'>5: Medium</p>
          <p className='px-2 text-xs'>5: Low</p>
        </div>
        </div>
      </div>
      <p className='text-xs text-center'>T© 2020 R Systems International Limited. All rights reserved.</p>
    </div>  
    </div>
    </div>
  );
}

const scrollbarStyle = {
  scrollbarWidth: 'thin',
  scrollbarColor: '#888 #f1f1f1',
  overflowY: 'scroll',
};

export default Dashboard;


