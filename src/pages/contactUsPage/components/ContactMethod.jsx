import React from 'react'
import { Card, CardContent } from '../../../components/ui/card'

const ContactMethod = ({ icon: Icon, title, value, link }) => {
  return (
      <Card className="text-center hover:shadow-md transition-shadow bg-transparent">
          <CardContent className="pt-6 pb-6 ">
              <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                  </div>
              </div>
              <h3 className="font-bold text-2xl mb-2">{title}</h3>
              {link ? (
                  <a
                      href={link}
                      className="text-lg font-semibold text-gray-600 hover:text-orange-500 transition-colors"
                  >
                      {value}
                  </a>
              ) : (
                  <p className="text-sm text-gray-600">{value}</p>
              )}
          </CardContent>
      </Card>
  )
}

export default ContactMethod