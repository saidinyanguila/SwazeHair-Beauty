import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Clock, User, Mail, Phone, CheckCircle, CreditCard  } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {loadStripe} from '@stripe/stripe-js';

const services = [
  { id: "haircut", name: "Haircut & Styling", duration: "45-60 min" },
  { id: "keratin", name: "Keratin Treatment", duration: "2-3 hours" },
  { id: "blowout", name: "Blowout & Styling", duration: "30-45 min" },
  { id: "bridal", name: "Bridal & Events", duration: "1-2 hours" },
  { id: "conditioning", name: "Deep Conditioning", duration: "30-45 min" },
];

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"
];

const BookingForm = () => {
	const [date, setDate] = useState<Date>();
	const [selectedService, setSelectedService] = useState("");
	const [selectedTime, setSelectedTime] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [apiURL, setApiURL] = useState("https://swazehair-beauty.onrender.com");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!selectedService || !date || !selectedTime || !name || !email || !phone) {
			toast.error("Please fill in all fields");
			return;
		}

		// Simulate booking submission
		setIsSubmitted(true);
		toast.success("Complete Payment.");
	};

	const handlePayment = async (e: React.FormEvent) => {
		const stripe = await loadStripe("pk_test_51ShD7Y2No5he7Fm9vIXdVaV4j5iQpglSFRPoHHSYyaXIhbq3e8LeidwGes9jc43ZFAU8PS6TW73zdfSMiw0C9IWT00tieCranT");
		const body = {
			products : [
				{
					name: `${services.find(s => s.id === selectedService)?.name} Appointment at Swaze Hair & Beauty Salon`,
					images: "https://placehold.co/600x400",
					price: 150
				}
			]
		};

		const response = await fetch(`${apiURL}/create-checkout-session`, {
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body:JSON.stringify(body)
		});

		const session = await response.json();
		alert("You will be redirected to a secure page where you can complete your payment.");
		window.location.href = session.url;
	};

	const resetForm = () => {
		setDate(undefined);
		setSelectedService("");
		setSelectedTime("");
		setName("");
		setEmail("");
		setPhone("");
		setIsSubmitted(false);
	};

	if (isSubmitted) {
		return (
		<section id="booking" className="py-20 md:py-32 z-40">
			<div className="container mx-auto px-4 md:px-6">
			<Card className="max-w-2xl mx-auto text-center py-12">
				<CardContent className="space-y-6">
					<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
						<CreditCard className="h-10 w-10 text-primary" />
					</div>

					<div>
						<h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
							Almost There!
						</h3>
						<p className="text-muted-foreground">
							Complete your payment to confirm your booking.
						</p>
					</div>

					<div className="bg-muted/50 rounded-lg p-4 text-left space-y-2">
						<p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</p>
						<p><strong>Date:</strong> {date && format(date, "EEEE, MMMM d, yyyy")}</p>
						<p><strong>Time:</strong> {selectedTime}</p>
						<p><strong>Deposit:</strong> R 150 (8.09 USD)</p>
					</div>

					<p className="text-sm text-muted-foreground">A confirmation email will been sent to <strong>{email}</strong> after payment is completed.</p>

					<Button variant="elegant" onClick={handlePayment}>Complete Payment</Button>
					<br />
					<Button variant="elegant" onClick={resetForm}>Cancel Appointment</Button>
				</CardContent>
			</Card>
			</div>
		</section>
		);
	}

	return (
		<section id="booking" className="py-20 md:py-32">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16">
					<span className="inline-block text-sm font-medium text-white mb-3 tracking-widest uppercase">
						Book Now
					</span>
					<h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
						Schedule Your Visit
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Choose your preferred service, date, and time. We'll take care of the rest.
					</p>
				</div>
				<Card className="max-w-2xl mx-auto">
					<CardHeader>
						<CardTitle className="text-white">Book an Appointment</CardTitle>
						<CardDescription>Fill in your details to reserve your spot</CardDescription>
					</CardHeader>

					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-6">
						{/* Service Selection */}
						<div className="space-y-2">
							<Label className="text-white" htmlFor="service">Select Service</Label>
							<Select value={selectedService} onValueChange={setSelectedService}>
							<SelectTrigger>
								<SelectValue className="text-white" placeholder="Choose a service" />
							</SelectTrigger>
							<SelectContent>
								{services.map((service) => (
								<SelectItem key={service.id} value={service.id}>
									<div className="flex justify-between items-center gap-4">
									<span>{service.name}</span>
									<span className="text-muted-foreground text-xs">({service.duration})</span>
									</div>
								</SelectItem>
								))}
							</SelectContent>
							</Select>
						</div>

						{/* Date & Time */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
							<Label className="text-white">Select Date</Label>
							<Popover>
								<PopoverTrigger asChild>
								<Button
									variant="outline"
									className={cn(
									"w-full justify-start text-left font-normal",
									!date && "text-muted-foreground"
									)}
								>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{date ? format(date, "PPP") : "Pick a date"}
								</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									initialFocus
									disabled={(date) => date < new Date() || date.getDay() === 0}
									className="pointer-events-auto"
								/>
								</PopoverContent>
							</Popover>
							</div>

							<div className="space-y-2">
							<Label className="text-white">Select Time</Label>
							<Select value={selectedTime} onValueChange={setSelectedTime}>
								<SelectTrigger>
								<Clock className="mr-2 h-4 w-4 text-muted-foreground" />
								<SelectValue className="text-white" placeholder="Choose time" />
								</SelectTrigger>
								<SelectContent>
								{timeSlots.map((time) => (
									<SelectItem key={time} value={time}>
									{time}
									</SelectItem>
								))}
								</SelectContent>
							</Select>
							</div>
						</div>

						{/* Personal Details */}
						<div className="space-y-4">
							<div className="space-y-2">
							<Label className="text-white" htmlFor="name">Full Name</Label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
								id="name"
								placeholder="Your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="pl-10"
								/>
							</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label className="text-white" htmlFor="email">Email</Label>
								<div className="relative">
								<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="email"
									type="email"
									placeholder="your@email.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="pl-10"
								/>
								</div>
							</div>

							<div className="space-y-2">
								<Label className="text-white" htmlFor="phone">Phone</Label>
								<div className="relative">
								<Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="phone"
									type="tel"
									placeholder="Your Phone Number"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									className="pl-10"
								/>
								</div>
							</div>
							</div>
						</div>

						<Button type="submit" variant="hero" size="lg" className="w-full">
							Proceed to Payment
						</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default BookingForm;
