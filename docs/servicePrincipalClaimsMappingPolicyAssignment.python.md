# `servicePrincipalClaimsMappingPolicyAssignment` Submodule <a name="`servicePrincipalClaimsMappingPolicyAssignment` Submodule" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalClaimsMappingPolicyAssignment <a name="ServicePrincipalClaimsMappingPolicyAssignment" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment"></a>

Represents a {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment azuread_service_principal_claims_mapping_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_claims_mapping_policy_assignment

servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  claims_mapping_policy_id: str,
  service_principal_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.claimsMappingPolicyId">claims_mapping_policy_id</a></code> | <code>str</code> | ID of the claims mapping policy to assign. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Object ID of the service principal for which to assign the policy. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#id ServicePrincipalClaimsMappingPolicyAssignment#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `claims_mapping_policy_id`<sup>Required</sup> <a name="claims_mapping_policy_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.claimsMappingPolicyId"></a>

- *Type:* str

ID of the claims mapping policy to assign.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#claims_mapping_policy_id ServicePrincipalClaimsMappingPolicyAssignment#claims_mapping_policy_id}

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.servicePrincipalId"></a>

- *Type:* str

Object ID of the service principal for which to assign the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#service_principal_id ServicePrincipalClaimsMappingPolicyAssignment#service_principal_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#id ServicePrincipalClaimsMappingPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_claims_mapping_policy_assignment

servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_claims_mapping_policy_assignment

servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_claims_mapping_policy_assignment

servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.claimsMappingPolicyIdInput">claims_mapping_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.claimsMappingPolicyId">claims_mapping_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `claims_mapping_policy_id_input`<sup>Optional</sup> <a name="claims_mapping_policy_id_input" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.claimsMappingPolicyIdInput"></a>

```python
claims_mapping_policy_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `claims_mapping_policy_id`<sup>Required</sup> <a name="claims_mapping_policy_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.claimsMappingPolicyId"></a>

```python
claims_mapping_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalClaimsMappingPolicyAssignmentConfig <a name="ServicePrincipalClaimsMappingPolicyAssignmentConfig" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import service_principal_claims_mapping_policy_assignment

servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  claims_mapping_policy_id: str,
  service_principal_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.claimsMappingPolicyId">claims_mapping_policy_id</a></code> | <code>str</code> | ID of the claims mapping policy to assign. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Object ID of the service principal for which to assign the policy. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#id ServicePrincipalClaimsMappingPolicyAssignment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `claims_mapping_policy_id`<sup>Required</sup> <a name="claims_mapping_policy_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.claimsMappingPolicyId"></a>

```python
claims_mapping_policy_id: str
```

- *Type:* str

ID of the claims mapping policy to assign.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#claims_mapping_policy_id ServicePrincipalClaimsMappingPolicyAssignment#claims_mapping_policy_id}

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Object ID of the service principal for which to assign the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#service_principal_id ServicePrincipalClaimsMappingPolicyAssignment#service_principal_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipalClaimsMappingPolicyAssignment.ServicePrincipalClaimsMappingPolicyAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/service_principal_claims_mapping_policy_assignment#id ServicePrincipalClaimsMappingPolicyAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


