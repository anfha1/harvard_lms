<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Models\luser;

class UserLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $data_bind = &$GLOBALS['data_bind'];
        if ($data_bind['logined']) {
            return $next($request);
        }

        if ($request->isMethod('post')) {
            return redirect()->back();
        }
        
        return redirect('/');
    }
}
