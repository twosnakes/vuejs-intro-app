document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      
      reviews: [
                {"Vue.js is so cool"
                  rating: 8,
                  reviewer: "Josh"
                },

                {"Youre so functionsl Vue.js"
                  rating: 10,
                  reviewer: "Jay"
                },
                {"I miss Angular.js",
                  rating: 3,
                  reviewer: "peter"
                }
                ],
            newReviewText: ''
            newReviewRtaing: ''
            newReviewReviewer: ''
    },
    methods: {
      addReview: function() {
        if (this.newReviewText !== '' && this.newReviewRating !== '' && this.newReviewReviewer !== '') {
        var reviewObj = {
                        text: this.newReviewText,
                        rating: this.newReviewRating,
                        reviewer: this.newReviewReviewer
                        },
            newReview: ''
            newReviewText: ''
            newReviewRtaing: ''
            newReviewReviewer: ''
        this.reviews.push(this.newReview);
        this.review = '';
      },
      isPositive: function(inputReview) {
        return inputReview.indexOf('stupid') === -1;
        }
      }
    }
  });
});
