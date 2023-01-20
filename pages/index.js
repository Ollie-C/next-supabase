import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@/components/account";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <main className="main">
      <div className="form-container">
        <div>
          <h1>Welcome</h1>
          {!session ? (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
              providers={["google", "github"]}
            />
          ) : (
            <Account session={session} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
