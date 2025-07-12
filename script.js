
/* ========= BASE STYLES ========= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #f0f8f8;
  color: #333;
}

/* ========= HEADER ========= */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #004d4d;
  padding: 1rem 2rem;
  color: white;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo img {
  height: 50px;
  width: auto;
  border-radius: 5px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #00cccc;
}

/* ========= BANNER ========= */
.banner {
  height: 80vh;
  background: url('images/banner.jpg') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.banner-text {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem 3rem;
  border-radius: 12px;
}

.banner-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* ========= SECTIONS ========= */
section {
  padding: 4rem 2rem;
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: #004d4d;
  margin-bottom: 2rem;
}

/* ========= ABOUT ========= */
.about p {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* ========= ROOMS ========= */
.room-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.room-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.room-card:hover {
  transform: scale(1.02);
}

.room-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.room-card h3 {
  padding: 1rem;
  color: #004d4d;
}

.room-card p {
  padding: 0 1rem 1rem;
}

/* ========= CONTACT FORM ========= */
.contact form {
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact input,
.contact textarea {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.contact button {
  padding: 1rem;
  border: none;
  background-color: #004d4d;
  color: white;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact button:hover {
  background-color: #006666;
}

/* ========= FOOTER ========= */
footer {
  background-color: #004d4d;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
}

