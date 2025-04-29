"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const loginFormSchema =  z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2)
})


const registerFromSchema  = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2)
  
})

// const handleLogin = (values: z.infer<typeof loginFormSchema>) => {
//   console.log(values)
// }





const Auth = () => {
  const loginFrom = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password:"",
    },
  })
  function handleLogin(values: z.infer<typeof loginFormSchema>) {
    console.log(values)
  }
 

    return ( 
        <div>

        <div className="flex justify-center items-center">

        <Tabs defaultValue="login" className="">
  <TabsList className="bg-transparent">
  <div className="flex item-center justify-around mb-15 p-1.5 px- rounded-full bg-[#0009575E]
">

    <TabsTrigger value="login" className="px-10 py-2 rounded-full   data-[state=active]:bg-[#000957] text-white font-medium mr-12">Login</TabsTrigger>
    <TabsTrigger value="password" className="px-10 py-2 rounded-full data-[state=active]:bg-[#000957]  text-white font-medium">Register</TabsTrigger>
</div>
  </TabsList>
  <TabsContent value="login" >
    {/* login form */}
    {
      <div className="my-10">

      <Form {...loginFrom}>
      <form onSubmit={loginFrom.handleSubmit(handleLogin)} className="space-y-8">
        <FormField
          control={loginFrom.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  
    </div>
  }</TabsContent>
  <TabsContent value="password">
    {


    }
  </TabsContent>
</Tabs>
        </div>
        </div>

     );
}
 
export default Auth;