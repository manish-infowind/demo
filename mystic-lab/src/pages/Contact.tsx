import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  HeadphonesIcon,
  FileText,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medoscopic-blue-600 to-medoscopic-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're here to help you with any questions about our pharmaceutical
            products and services. Reach out to our expert team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-medoscopic-blue-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Headquarters
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    123 Medical Center Drive
                    <br />
                    Healthcare District, HD 12345
                    <br />
                    United States
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Research Facility
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    456 Innovation Boulevard
                    <br />
                    Science Park, SP 67890
                    <br />
                    United States
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-medoscopic-blue-600">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <HeadphonesIcon className="h-4 w-4 text-medoscopic-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Customer Support
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-medoscopic-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      General Inquiries
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      info@medoscopic.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-4 w-4 text-medoscopic-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Medical Information
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      medical@medoscopic.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-medoscopic-blue-600">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Monday - Friday
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Saturday
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    9:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Sunday
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    Closed
                  </span>
                </div>
                <Separator className="my-3" />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Emergency medical information available 24/7 through our
                  automated system
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-medoscopic-blue-600">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible. For urgent medical questions, please contact your
                  healthcare provider.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Inquiry Category</Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange(value, "category")
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Information
                          </SelectItem>
                          <SelectItem value="product">
                            Product Inquiry
                          </SelectItem>
                          <SelectItem value="support">
                            Customer Support
                          </SelectItem>
                          <SelectItem value="medical">
                            Medical Information
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide detailed information about your inquiry..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Important:</strong> This form is for general
                      inquiries only. For medical emergencies, please contact
                      your healthcare provider or call emergency services
                      immediately.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-medoscopic-blue-600 hover:bg-medoscopic-blue-700 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    How quickly will I receive a response?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We typically respond to inquiries within 24-48 hours during
                    business days. Medical information requests may require
                    additional time for review.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Can I request product samples?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Product samples are available for healthcare professionals.
                    Please specify your professional credentials in your
                    message.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Do you provide medical advice?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We provide product information only. Please consult your
                    healthcare provider for medical advice and treatment
                    recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
