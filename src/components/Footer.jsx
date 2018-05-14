import React from 'react'

const Footer = () => {
  const copyRightYear = (new Date()).getFullYear()

  return (
    <footer class="footer">
      <div class="container">
        <span class="copyright">© {copyRightYear} Copyright Text</span>
        <span class="float-right">Place footer content here.</span>
      </div>
    </footer>
  )
}

export default Footer
