import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleAlert , CheckCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const PaymentStatus = () => {
    const [searchParams] = useSearchParams();
    const paymentStatus = searchParams.get("p");
    
    if (paymentStatus == "0") {
        return (
        <section id="booking" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
            <Card className="max-w-2xl mx-auto text-center py-12">
                <CardContent className="space-y-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <TriangleAlert className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">Could Not Complete Payment</h3>

                        <p className="text-muted-foreground">
                            An error has occured or the operation was canceled
                        </p>
                    </div>

                    <Button variant="elegant" onClick={() => {window.location.href="/#booking"}}>
                        Go Back Home
                    </Button>
                </CardContent>
            </Card>
            </div>
        </section>
        );
    }
    else if (paymentStatus == "1") {
        return (
        <section id="booking" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
            <Card className="max-w-2xl mx-auto text-center py-12">
                <CardContent className="space-y-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                            Payment Successful!
                        </h3>
                        <p className="text-muted-foreground">
                            Your appointment has been booked.
                        </p>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        A confirmation email hes been sent to <strong></strong>.
                    </p>

                    <Button variant="elegant" onClick={() => {window.location.href="/#booking"}}>
                        Book Another Appointment
                    </Button>
                </CardContent>
            </Card>
            </div>
        </section>
        );
    }
    else {
        return <h1>WTF are u doin</h1>
    }
};

export default PaymentStatus;