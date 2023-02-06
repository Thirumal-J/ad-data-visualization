{{- /* Template based on https://docs.sonarqube.org/latest/analysis/generic-issue/ */ -}}
{
  "issues": [
  {{- $t_first := true }}
  {{- range $result := . }}
    {{- $vulnerabilityType := .Type }}
    {{- range .Vulnerabilities -}}
    {{- if $t_first -}}
      {{- $t_first = false -}}
    {{ else -}}
      ,
    {{- end }}
    {
      "engineId": "TRIVY",
      "ruleId": "{{$vulnerabilityType}}",
      "severity": {{ if eq .Severity "UNKNOWN" -}}
                    "INFO"
                  {{- else if eq .Severity "LOW" -}}
                    "INFO"
                  {{- else if eq .Severity "MEDIUM" -}}
                    "MINOR"
                  {{- else if eq .Severity "HIGH" -}}
                    "MAJOR"
                  {{- else if eq .Severity "CRITICAL" -}}
                    "CRITICAL"
                  {{-  else -}}
                    "INFO"
                  {{- end }},
      "type": "VULNERABILITY",
      "primaryLocation": {
        "message": {{ printf "Package: %v\nInstalled Version: %v\nVulnerability %v\nSeverity: %v\nFixed Version: %v\nDescription: %v\nLink: [%v](%v)" .PkgName .InstalledVersion .VulnerabilityID .Vulnerability.Severity .FixedVersion .Title .VulnerabilityID .PrimaryURL | printf "%q"}},
        "filePath": "CVE_in_the_image.txt"
      }
    }
    {{- end -}}
  {{- end }}
  ]
}
