// Simple API endpoint to handle application form submission
// This would typically be implemented as a serverless function or backend API

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const applicationData = req.body
    
    // Format the email content
    const emailContent = formatApplicationEmail(applicationData)
    
    // In a real implementation, you would use a service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    // - Resend
    // - EmailJS
    
    // For now, we'll log the data and simulate success
    console.log('Application received:', applicationData)
    console.log('Email content:', emailContent)
    
    // Simulate email sending
    await sendEmail({
      to: 'nate@affinitisolutions.com',
      subject: `New Enterprise Sales Division Application - ${applicationData.companyName}`,
      html: emailContent
    })
    
    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully' 
    })
    
  } catch (error) {
    console.error('Error processing application:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Error processing application' 
    })
  }
}

function formatApplicationEmail(data) {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background-color: #0891b2; color: white; padding: 20px; text-align: center; }
          .section { margin: 20px 0; padding: 15px; border-left: 4px solid #0891b2; background-color: #f8f9fa; }
          .section h3 { margin-top: 0; color: #0891b2; }
          .field { margin: 10px 0; }
          .label { font-weight: bold; color: #555; }
          .value { margin-left: 10px; }
          .highlight { background-color: #fef3c7; padding: 10px; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Enterprise Sales Division Application</h1>
          <p>Submitted: ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="highlight">
          <strong>Company:</strong> ${data.companyName}<br>
          <strong>Contact:</strong> ${data.firstName} ${data.lastName} (${data.title})<br>
          <strong>Revenue:</strong> ${data.annualRevenue}<br>
          <strong>Investment Capacity:</strong> ${data.investmentCapacity}
        </div>
        
        <div class="section">
          <h3>Contact Information</h3>
          <div class="field"><span class="label">Name:</span><span class="value">${data.firstName} ${data.lastName}</span></div>
          <div class="field"><span class="label">Title:</span><span class="value">${data.title}</span></div>
          <div class="field"><span class="label">Email:</span><span class="value">${data.email}</span></div>
          <div class="field"><span class="label">Phone:</span><span class="value">${data.phone}</span></div>
        </div>
        
        <div class="section">
          <h3>Company Information</h3>
          <div class="field"><span class="label">Company Name:</span><span class="value">${data.companyName}</span></div>
          <div class="field"><span class="label">Website:</span><span class="value">${data.website}</span></div>
          <div class="field"><span class="label">Industry:</span><span class="value">${data.industry}</span></div>
          <div class="field"><span class="label">Year Founded:</span><span class="value">${data.yearFounded}</span></div>
          <div class="field"><span class="label">Headquarters:</span><span class="value">${data.headquarters}</span></div>
        </div>
        
        <div class="section">
          <h3>Financial Qualification</h3>
          <div class="field"><span class="label">Annual Revenue:</span><span class="value">${data.annualRevenue}</span></div>
          <div class="field"><span class="label">Revenue Growth Rate:</span><span class="value">${data.revenueGrowthRate}</span></div>
          <div class="field"><span class="label">Profitability:</span><span class="value">${data.profitability}</span></div>
          <div class="field"><span class="label">Investment Capacity:</span><span class="value">${data.investmentCapacity}</span></div>
          <div class="field"><span class="label">Current Sales Team Size:</span><span class="value">${data.currentSalesTeamSize}</span></div>
        </div>
        
        <div class="section">
          <h3>Business Qualification</h3>
          <div class="field"><span class="label">Current Challenges:</span><span class="value">${data.currentChallenges}</span></div>
          <div class="field"><span class="label">Target Deal Size:</span><span class="value">${data.targetDealSize}</span></div>
          <div class="field"><span class="label">Current Largest Deal:</span><span class="value">${data.currentLargestDeal}</span></div>
          <div class="field"><span class="label">Sales Process:</span><span class="value">${data.salesProcess}</span></div>
          <div class="field"><span class="label">CRM System:</span><span class="value">${data.crmSystem}</span></div>
        </div>
        
        <div class="section">
          <h3>Quality Assessment</h3>
          <div class="field"><span class="label">Service Description:</span><span class="value">${data.serviceDescription}</span></div>
          <div class="field"><span class="label">Competitive Advantage:</span><span class="value">${data.competitiveAdvantage}</span></div>
          <div class="field"><span class="label">Client Retention Rate:</span><span class="value">${data.clientRetentionRate}</span></div>
          <div class="field"><span class="label">Reference Clients:</span><span class="value">${data.referenceClients || 'Not provided'}</span></div>
          <div class="field"><span class="label">Awards:</span><span class="value">${data.awards || 'Not provided'}</span></div>
        </div>
        
        <div class="section">
          <h3>Strategic Alignment</h3>
          <div class="field"><span class="label">Growth Goals:</span><span class="value">${data.growthGoals}</span></div>
          <div class="field"><span class="label">Timeframe:</span><span class="value">${data.timeframe}</span></div>
          <div class="field"><span class="label">Executive Commitment:</span><span class="value">${data.executiveCommitment}</span></div>
          <div class="field"><span class="label">Previous Consulting:</span><span class="value">${data.previousConsulting}</span></div>
          <div class="field"><span class="label">Expectations:</span><span class="value">${data.expectations}</span></div>
        </div>
        
        <div class="section">
          <h3>Final Questions</h3>
          <div class="field"><span class="label">Why Affiniti:</span><span class="value">${data.whyAffiniti}</span></div>
          <div class="field"><span class="label">Additional Info:</span><span class="value">${data.additionalInfo || 'Not provided'}</span></div>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #e5f3ff; border-radius: 5px;">
          <h3 style="color: #0891b2;">Next Steps</h3>
          <p>1. Review application for qualification criteria</p>
          <p>2. Conduct initial assessment call if qualified</p>
          <p>3. Schedule detailed discovery session</p>
          <p>4. Present proposal if mutual fit</p>
        </div>
      </body>
    </html>
  `
}

async function sendEmail({ to, subject, html }) {
  // This is where you would implement actual email sending
  // Using services like SendGrid, AWS SES, etc.
  
  // For demonstration purposes, we'll just log
  console.log(`Sending email to: ${to}`)
  console.log(`Subject: ${subject}`)
  console.log(`Content: ${html}`)
  
  // Simulate async email sending
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 1000)
  })
}

