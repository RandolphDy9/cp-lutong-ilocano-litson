import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Maria Santos",
      rating: 5,
      comment:
        "The best Ilocano food I've had outside of Ilocos! The bagnet is crispy and flavorful, and the litson is perfectly roasted. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "Juan Dela Cruz",
      rating: 5,
      comment:
        "Authentic taste that reminds me of home. The dinuguan is exceptional and the pork sisig is a must-try. Great service too!",
      date: "1 month ago",
    },
    {
      name: "Anna Reyes",
      rating: 5,
      comment:
        "Amazing food quality and generous portions. The whole litson for our family gathering was a huge hit. Will definitely order again!",
      date: "3 weeks ago",
    },
    {
      name: "Roberto Garcia",
      rating: 5,
      comment:
        "Delicious traditional Ilocano dishes. The flavors are authentic and the prices are reasonable. The litson chop is my favorite!",
      date: "1 week ago",
    },
    {
      name: "Mona Realiza",
      rating: 5,
      comment:
        "I am a local here at Guelph. This is by far the best Ilocano Litson.",
      date: "4 days ago",
    },
    {
      name: "Jojo Lopez",
      rating: 5,
      comment:
        "The food was very good as well as the people. 5 star worth!",
      date: "2 days ago",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who love our authentic Ilocano cuisine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">{renderStars(review.rating)}</div>
                <p className="font-sans text-gray-700 mb-4 leading-relaxed">"{review.comment}"</p>
                <div className="flex justify-between items-center">
                  <h4 className="font-sans font-semibold text-gray-800">{review.name}</h4>
                  <span className="font-sans text-sm text-gray-500">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
