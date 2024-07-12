document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    "What's your favorite book? (¿Cuál es tu libro favorito?)",
    "What's your favorite movie? (¿Cuál es tu película favorita?)",
    "Where would you like to travel? (¿A dónde te gustaría viajar?)",
    "What's your favorite hobby? (¿Cuál es tu pasatiempo favorito?)",
    "What do you want to be when you grow up? (¿Qué quieres ser cuando seas grande?)",
    "What's your favorite food? (¿Cuál es tu comida favorita?)",
    "What's your favorite sport? (¿Cuál es tu deporte favorito?)",
    "Who's your favorite celebrity? (¿Quién es tu celebridad favorita?)",
    "What's your favorite TV show? (¿Cuál es tu programa de televisión favorito?)",
    "What's your dream job? (¿Cuál es tu trabajo soñado?)",
    "What's your favorite color? (¿Cuál es tu color favorito?)",
    "What's your favorite animal? (¿Cuál es tu animal favorito?)",
    "What's your favorite holiday? (¿Cuál es tu fiesta favorita?)",
    "What's your favorite song? (¿Cuál es tu canción favorita?)",
    "What's your favorite band or musician? (¿Cuál es tu banda o músico favorito?)",
    "What's your favorite video game? (¿Cuál es tu videojuego favorito?)",
    "What's your favorite app? (¿Cuál es tu aplicación favorita?)",
    "What's your favorite restaurant? (¿Cuál es tu restaurante favorito?)",
    "What's your favorite drink? (¿Cuál es tu bebida favorita?)",
    "Who's your favorite superhero? (¿Quién es tu superhéroe favorito?)",
    "What's your favorite cartoon? (¿Cuál es tu caricatura favorita?)",
    "What's your favorite board game? (¿Cuál es tu juego de mesa favorito?)",
    "What's your favorite outdoor activity? (¿Cuál es tu actividad al aire libre favorita?)",
    "What's your favorite indoor activity? (¿Cuál es tu actividad bajo techo favorita?)",
    "What's your favorite place to hang out with friends? (¿Cuál es tu lugar favorito para pasar el rato con amigos?)",
    "What's your favorite type of weather? (¿Cuál es tu tipo de clima favorito?)",
    "What's your favorite thing to do on a rainy day? (¿Cuál es tu cosa favorita para hacer en un día lluvioso?)",
    "What's your favorite thing to do on a sunny day? (¿Cuál es tu cosa favorita para hacer en un día soleado?)",
    "What's your favorite way to relax? (¿Cuál es tu manera favorita de relajarte?)",
    "What's your favorite way to exercise? (¿Cuál es tu manera favorita de ejercitarte?)",
    "What's your favorite thing to cook or bake? (¿Cuál es tu cosa favorita para cocinar o hornear?)",
    "What's your favorite way to spend a weekend? (¿Cuál es tu manera favorita de pasar un fin de semana?)",
    "What's your favorite thing to do with your family? (¿Cuál es tu cosa favorita para hacer con tu familia?)",
    "What's your favorite childhood memory? (¿Cuál es tu recuerdo de infancia favorito?)",
    "What's your favorite movie genre? (¿Cuál es tu género de película favorito?)",
    "What's your favorite way to spend a day off? (¿Cuál es tu manera favorita de pasar un día libre?)",
    "What's your favorite kind of pet? (¿Cuál es tu tipo de mascota favorito?)",
    "What's your favorite part of the day? (¿Cuál es tu parte favorita del día?)",
    "What's your favorite way to help others? (¿Cuál es tu manera favorita de ayudar a los demás?)",
    "What's your favorite thing about yourself? (¿Cuál es tu cosa favorita sobre ti mismo?)",
    "What's your favorite thing to do on a road trip? (¿Cuál es tu cosa favorita para hacer en un viaje por carretera?)",
    "What's your favorite type of vacation? (¿Cuál es tu tipo de vacaciones favorito?)",
    "What's your favorite souvenir from a trip? (¿Cuál es tu recuerdo favorito de un viaje?)",
    "What's your favorite thing to do in your free time? (¿Cuál es tu cosa favorita para hacer en tu tiempo libre?)",
    "What's your favorite way to stay organized? (¿Cuál es tu manera favorita de mantenerte organizado?)",
    "What's your favorite way to learn new things? (¿Cuál es tu manera favorita de aprender cosas nuevas?)",
    "What's your favorite way to study? (¿Cuál es tu manera favorita de estudiar?)",
    "What's your favorite place to visit in your hometown? (¿Cuál es tu lugar favorito para visitar en tu ciudad natal?)",
    "What's your favorite place to visit in your country? (¿Cuál es tu lugar favorito para visitar en tu país?)",
    "What's your favorite thing to do at a family gathering? (¿Cuál es tu cosa favorita para hacer en una reunión familiar?)",
    "What's your favorite type of social media? (¿Cuál es tu tipo de red social favorito?)",
    "What's your favorite type of video content? (¿Cuál es tu tipo de contenido de video favorito?)",
    "What's your favorite online game? (¿Cuál es tu juego en línea favorito?)",
    "What's your favorite thing to do with your friends? (¿Cuál es tu cosa favorita para hacer con tus amigos?)",
    "What's your favorite way to spend time alone? (¿Cuál es tu manera favorita de pasar el tiempo a solas?)"
  ];

  const questionElement = document.getElementById('question');
  const nextButton = document.getElementById('nextButton');

  nextButton.addEventListener('click', () => {
    if (questions.length === 0) {
      questionElement.textContent = 'No more questions available!';
      return;
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions.splice(randomIndex, 1)[0];
    questionElement.textContent = question;
  });
});