<li class="m-Lev1 m-nav_4"> <a href="{dede:field name='typeurl'/}" class="m-menu1">{dede:field name='typename'/}</a>
        <ul class="m-submenu">
          {dede:channel type='son' noself='yes'}
          <li class="Lev2"> <a href="[field:typeurl/]" class="m-menu2">[field:typename/]</a> </li>
          {/dede:channel}
        </ul>
      </li>