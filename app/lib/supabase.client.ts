import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL!,
    import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            autoRefreshToken: true,
        },
    },
)
export { supabase }
