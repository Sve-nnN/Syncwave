import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";


export default function SimpleRegistrationForm() {
    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Contactanos
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Envianos un mensaje y te daremos un presupuesto.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6 justify-center align-middle mx-auto">
                    <Typography variant="h6" color="blue-gray" className="-mb-3 mx-auto">
                        Tu nombre
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Pedro Perez"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none mx-auto",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3 mx-auto">
                        Tu email
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="nombre@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Mensaje
                    </Typography>
                    <div className="w-96 bg-slate-200 h-36">
      <Textarea label="Message" />
    </div>
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                                href="#"
                                className="font-medium transition-colors hover:text-gray-900"
                            >
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
                    sign up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}