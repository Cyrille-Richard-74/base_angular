module='ModuleTest'

# Module $module
ng generate module modules/$module --module=modules/modules
ng generate module modules/$module/$module-routing --flat --module=modules/$module/$module
touch src/app/modules/$module/$module-config.ts

# ng generate class modules/$module/classes/$module

# ng generate interface modules/$module/interfaces/$module

# ng generate service modules/$module/services/$module-api
# ng generate service modules/$module/services/$module-http

# ng generate component modules/$module/shared/modal --module=modules/$module/$module
# ng generate component modules/$module/shared/sidebar --module=modules/$module/$module
# ng generate component modules/$module/shared/toolbar --module=modules/$module/$module

# ng generate component modules/$module/pages/index/main --module=modules/$module/$module
# ng generate component modules/$module/pages/index/sidebar --module=modules/$module/$module
# ng generate component modules/$module/pages/index/toolbar --module=modules/$module/$module
# ng generate component modules/$module/pages/index/modal --module=modules/$module/$module

# ng generate component modules/$module/pages/create/main --module=modules/$module/$module
# ng generate component modules/$module/pages/create/sidebar --module=modules/$module/$module
# ng generate component modules/$module/pages/create/toolbar --module=modules/$module/$module
# ng generate component modules/$module/pages/create/modal --module=modules/$module/$module

# ng generate component modules/$module/pages/read/main --module=modules/$module/$module
# ng generate component modules/$module/pages/read/sidebar --module=modules/$module/$module
# ng generate component modules/$module/pages/read/toolbar --module=modules/$module/$module
# ng generate component modules/$module/pages/read/modal --module=modules/$module/$module

# ng generate component modules/$module/pages/update/main --module=modules/$module/$module
# ng generate component modules/$module/pages/update/sidebar --module=modules/$module/$module
# ng generate component modules/$module/pages/update/toolbar --module=modules/$module/$module
# ng generate component modules/$module/pages/update/modal --module=modules/$module/$module

# ng generate module modules/$module/$module-form --flat --module=modules/$module/$module
# ng generate component modules/$module/shared/form/main --module=modules/$module/$module-form