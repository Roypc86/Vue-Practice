app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
        <span class="bold-text">{{ review.name }}</span> 
          Gave this {{ review.rating }} stars
          <br/>
          "{{ review.review }}"
          "{{ review.recommendation_question}}"
          
        </li>
      </ul>
    </div>
  `
  })