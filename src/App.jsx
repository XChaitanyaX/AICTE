import './App.css';

const CertificateSection = () => {
  return (
    <div className="certificate-section-bg">
      <div className="certificate-card">
        <div className="certificate-verified-icon">
          <img src="https://aictecert.eduskillsfoundation.org/images/checked.gif" alt="Verified" />
        </div>
        <div className="certificate-title">AICTE Internship Certificate is successfully verified</div>
        <div className="certificate-details">
          <div><span className="certificate-label">Certificate ID:</span> f907ce00ed4636gg2cf9e4b5a71a89c7</div>
          <div><span className="certificate-label">Issued On:</span> 22 Jun 2025</div>
          <div><span className="certificate-label">Issued To:</span> Kundrapu Sagar</div>
          <div><span className="certificate-label">Institute:</span> Siddhartha Academy of Higher Education</div>
          <div><span className="certificate-label">Internship:</span> EDUSKILLS ACADEMY PYTHON FULL STACK DEVELOPER VIRTUAL INTERNSHIP (APR - JUN 2025)</div>
          <div><span className="certificate-label">Grade:</span> P</div>
        </div>
        <div className="certificate-grade-box">
          <div className="certificate-grade-title">Grade Details</div>
          <div className="certificate-grade-columns">
            <div className="certificate-grade-col">
              <div>O- Outstanding : 90-100</div>
              <div>E- Excellent : 80-89</div>
              <div>A- Very Good : 70-79</div>
              <div>B- Good : 60-69</div>
            </div>
            <div className="certificate-grade-col">
              <div>C- Fair : 50-59</div>
              <div>D- Average : 40-49</div>
              <div>P- Pass : 30-39</div>
              <div>F- Fail : Below 30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* Top blue bar */}
      <div style={{backgroundColor:'#337ab7',minHeight:'15px',marginBottom:'0px', borderRadius:'4px'}}></div>
      {/* Banner Image */}
      <div style={{ background: '#2176c1', padding: 0, marginBottom: 45.5 }}>
        <img
          src="https://aictecert.eduskillsfoundation.org/images/aicte1million2.png"
          alt="AICTE Banner"
          style={{ width: '100%', maxWidth: "100vw", display: 'block', margin: '0 auto' }}
        />
      </div>
      <CertificateSection />
    </div>
  );
}

export default App;
