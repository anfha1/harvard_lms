<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserAdmin
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
        if ($data_bind['info_user'] && (int)$data_bind['info_user']->role === 1) {
            return $next($request);
        }
        if ($request->isMethod('post')) {
            return redirect()->back();
        }
        return redirect('/');
    }
}
