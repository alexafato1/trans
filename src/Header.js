import React from 'react'

function Header() {
    const lang = localStorage.getItem('lang') || 'en'
    function change(option){
    
        localStorage.setItem('lang', option.target.value);
        window.location.reload()
    }
    return (
        <div>
            <select onChange={change} value={lang}>
                <option value='en'>English</option>
                <option value='ua'>Ukrainian</option>
                <option value='ru'>Russian</option>
            </select>
        </div>
    )
}

export default Header
  