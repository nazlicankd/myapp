import React, { useState } from 'react';

function TemizleFormu() {
  const [formData, setFormData] = useState({
    girdi1: '',
    girdi2: '',
    girdi3: '',
  });

  // Tüm giriş alanlarını temizle
  const temizle = () => {
    setFormData({
      girdi1: '',
      girdi2: '',
      girdi3: '',
    });
  };

  return (
    <div>
      <form>
        <button type='button' onClick={temizle}>
          Temizle
        </button>
      </form>
    </div>
  );
}

export default TemizleFormu;
