import React from 'react'

const Footer = () => {
  const copyRightYear = (new Date()).getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <span className="copyright">© {copyRightYear} Copyright Text</span>
        <span className="float-right">Place footer content here.</span>
      </div>
    </footer>
  )
}

export default Footer
