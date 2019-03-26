<li class='{dede:field.currentstyle/}'> <a href="{dede:field name='typeurl'/}" class="menu1">{dede:field name='typename'/} <i {dede:field name=typeid runphp="yes"}
global $dsql;
$sql = "SELECT id From `#@__arctype` WHERE reid='@me' And ishidden<>1 order by sortrank asc limit 0, 100 ";
$row = $dsql->GetOne($sql);
                        @me=is_array($row)?'class="fa fa-caret-down"':'style="display:none"';
                        {/dede:field}> </i> </a>
                        <ul class="sub-menu dr-menu2">
                          {dede:channel type='son' noself='yes'}
                          <li class="Lev2"> <a href="[field:typeurl/]" class="menu2">[field:typename/]</a> </li>
                          {/dede:channel}
                        </ul>
                      </li>